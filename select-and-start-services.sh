#!/bin/bash

# Define function to select options
# Renders a text based list of options that can be selected by the
# user using up, down and enter keys and returns the chosen option.
#
#   Arguments   : list of options, maximum of 256
#                 "opt1" "opt2" ...
#   Return value: selected index (0 for opt1, 1 for opt2 ...)
function select_option {

    # little helpers for terminal print control and key input
    ESC=$( printf "\033")
    cursor_blink_on()  { printf "$ESC[?25h"; }
    cursor_blink_off() { printf "$ESC[?25l"; }
    cursor_to()        { printf "$ESC[$1;${2:-1}H"; }
    print_option()     { printf "   $1 "; }
    print_selected()   { printf "  $ESC[7m $1 $ESC[27m"; }
    get_cursor_row()   { IFS=';' read -sdR -p $'\E[6n' ROW COL; echo ${ROW#*[}; }
    key_input()        { read -s -n3 key 2>/dev/null >&2
                         if [[ $key = $ESC[A ]]; then echo up;    fi
                         if [[ $key = $ESC[B ]]; then echo down;  fi
                         if [[ $key = ""     ]]; then echo enter; fi; }

    # initially print empty new lines (scroll down if at bottom of screen)
    for opt; do printf "\n"; done

    # determine current screen position for overwriting the options
    local lastrow=`get_cursor_row`
    local startrow=$(($lastrow - $#))

    # ensure cursor and input echoing back on upon a ctrl+c during read -s
    trap "cursor_blink_on; stty echo; printf '\n'; exit" 2
    cursor_blink_off

    local selected=0
    while true; do
        # print options by overwriting the last lines
        local idx=0
        for opt; do
            cursor_to $(($startrow + $idx))
            if [ $idx -eq $selected ]; then
                print_selected "$opt"
            else
                print_option "$opt"
            fi
            ((idx++))
        done

        # user key control
        case `key_input` in
            enter) break;;
            up)    ((selected--));
                   if [ $selected -lt 0 ]; then selected=$(($# - 1)); fi;;
            down)  ((selected++));
                   if [ $selected -ge $# ]; then selected=0; fi;;
        esac
    done

    # cursor position back to normal
    cursor_to $lastrow
    printf "\n"
    cursor_blink_on

    return $selected
}


function select_opt {
    select_option "$@" 1>&2
    local result=$?
    echo $result
    return $result
}


function select_containers {
  # Define options for each service
  database_options=("PostgreSQL")
  database_selection_service_name=("db")

  orm_options=("Python / Django")
  orm_selection_service_name=("core-api")

  api_options=("GraphQL / Hasura" "GraphQL / Python-Django-Graphene"  "GraphQL / Postgraphile")
  api_selection_service_name=("graphql-hasura" "core-api"  "graphql-postgraphile")

  frontend_options=("TypeScript / React" "Python / Django" )
  frontend_selection_service_name=("frontend" "core-api" )

  # Array to store the container service names
  container_services=()

  echo "Please follow the prompts to select which container you would like for each service."

  # Select options for each service
  echo "Select Database:"
  case `select_opt "${database_options[@]}"` in
      *) container_services+=(${database_selection_service_name[$?]});;
  esac

  echo "Select ORM:"
  case `select_opt "${orm_options[@]}"` in
      *) container_services+=(${orm_selection_service_name[$?]});;
  esac

  echo "Select API:"
  case `select_opt "${api_options[@]}"` in
      *) container_services+=(${api_selection_service_name[$?]});;
  esac

  echo "Select Frontend:"
  case `select_opt "${frontend_options[@]}"` in
      *) container_services+=(${frontend_selection_service_name[$?]});;
  esac

  echo "Starting selected containers ..."

  docker compose up --build -d "${container_services[@]}"
}


function select_service_offering {
  # Define options for each service
  service_offerings=(
    "Database ONLY"
    "Database and API"
    "Database, ORM, and API"
    "Database, ORM, API, and Frontend"
  )

  # Defines the OPTIMAL containers for each service offering
  service_offerings_containers=(
    "db"
    "db graphql-hasura"
    "db core-api graphql-hasura"
    "db core-api graphql-hasura frontend"
  )

  echo "Select Service Offering:"
  case `select_opt "${service_offerings[@]}"` in
      *) container_services=${service_offerings_containers[$?]};;
  esac

  echo "Starting selected service offering ..."

  docker compose up --build -d ${container_services}
}

build_type=("I would like to select a service offering" "I would like to pick and choose each container")

echo""
echo "You will now be selecting what build you would like."
echo "Please select your stack by going through the prompts or exiting with CTRL+C"
echo ""

echo "Would you like to pick a service offering or each container?"
case `select_opt "${build_type[@]}"` in
    0) select_service_offering;;
    1) select_containers;;
esac

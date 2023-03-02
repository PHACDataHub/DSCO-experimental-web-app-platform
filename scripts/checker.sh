# meant to be included in ../check-dev.sh

# check that a command is available: e.g.
# e.g.: commandRequired docker
function commandRequired () {
    if [[ -z "$1" ]]; then 
        echo commandRequired: needs a command name as a parameter
        exit -1
    fi
    local reqCmd=$1

    # echo "Checking for ${reqCmd}" 
    command -v ${reqCmd} >/dev/null 2>&1 || { echo "";echo >&2 "✗ - ${reqCmd} is not installed.  Aborting."; exit 1; }
    echo "✓ - ${reqCmd} is installed"

}

function fileExists() {
    if [[ -z "$1" ]]; then 
        echo fileExists: needs a file name as a parameter
        exit -1
    fi
    local reqFile=$1

    # echo "Checking for ${reqFile}" 
    if [ -f ${reqFile} ]; then
        echo "✓ - ${reqFile} exists"
    else
        echo >&2 "✗ - ${reqFile} does not exist.  Aborting."; exit 1;
    fi
}

# Use git rev-parse --abbrev-ref HEAD to get the name of the current branch.

# Then it's only a matter of simply comparing values in your script:

BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "x" ]]; then
  echo 'Aborting script';
  exit 1;
fi

echo 'Do stuff';
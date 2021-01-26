# Read arguments passed to the script.
ENVIRONMENT='dev'
ALL=''
while getopts e:a o; do
  case $o in
    (e) ENVIRONMENT=$OPTARG;;
    (a) ALL='ALL';;
  esac
done

echo ""
echo "Migrating for environment: $ENVIRONMENT"
echo ""

echo " -> Step 1/3: Compiling migration scripts."
echo ""
for filename in ./src/core/db/migrations/*.ts; do
 npm run build -- -outDir ./build-migrations $filename
done
echo ""
echo " -> Compilation completed."
echo ""

echo ""
echo " -> Step 2/3: Starting migration rollback."
echo ""
if test "$ALL" = 'ALL'; then
    npx sequelize-cli db:migrate:undo:all --env $ENVIRONMENT
else
    npx sequelize-cli db:migrate:undo --env $ENVIRONMENT
fi
echo ""
echo " -> Migration rollback completed."
echo ""

echo ""
echo " -> Step 3/3: Deleting generated files."
echo ""
rm -Rf ./build-migrations
mkdir ./build-migrations
echo ""
echo " -> Deletion completed."

read -p "Press enter to continue"
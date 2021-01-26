# Read arguments passed to the script.
ENVIRONMENT='dev'
while getopts e o; do
  case $o in
    (e) ENVIRONMENT=$OPTARG;;
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
echo " -> Step 2/3: Starting migration."
echo ""
npx sequelize-cli db:migrate --env $ENVIRONMENT
echo ""
echo " -> Migration completed."
echo ""

echo ""
echo " -> Step 3/3: Deleting generated files."
echo ""
rm -Rf ./build-migrations
mkdir ./build-migrations
echo ""
echo " -> Deletion completed."

read -p "Press enter to continue"
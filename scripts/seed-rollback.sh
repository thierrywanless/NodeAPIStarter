# Read arguments passed to the script.
ENVIRONMENT='dev'
while getopts e o; do
  case $o in
    (e) ENVIRONMENT=$OPTARG;;
  esac
done

echo ""
echo "Seeding for environment: $ENVIRONMENT"
echo ""

echo " -> Step 1/3: Compiling seeder scripts."
echo ""
for filename in ./src/core/db/seeders/*.ts; do
 npm run build -- -outDir ./build-seeders $filename
done
echo ""
echo " -> Compilation completed."
echo ""

echo ""
echo " -> Step 2/3: Starting seed rollback."
echo ""
npx sequelize-cli db:seed:undo:all --env $ENVIRONMENT
echo ""
echo " -> Seed rollback completed."
echo ""

echo ""
echo " -> Step 3/3: Deleting generated files."
echo ""
rm -Rf ./build-seeders
mkdir ./build-seeders
echo ""
echo " -> Deletion completed."

read -p "Press enter to continue"
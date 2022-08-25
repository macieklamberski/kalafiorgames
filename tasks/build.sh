BUILD_DIR=build
STATIC_DIR=static
TEMPLATES_DIR=templates/pages

# Clear build directory.
rm -rf $BUILD_DIR
mkdir $BUILD_DIR

# Go through page files and generate static HTML version.
for f in $TEMPLATES_DIR/*.twig
do
   a=${f/$TEMPLATES_DIR\//}
   b=${a/.twig/}

   echo $(php index.php --request-uri=$b) >> $BUILD_DIR/$b.html
done

# Copy all static files to build directory.
cp -r $STATIC_DIR/* build

# Build stylesheet file using Sass.
npx sass styles/main.scss build/styles/main.css --style compressed --no-source-map

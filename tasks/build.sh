BUILD_DIR=build
STATIC_DIR=static
TEMPLATES_DIR=templates/pages

# Clear build directory.
rm -rf $BUILD_DIR

# Copy all static files to build directory.
cp -rT $STATIC_DIR $BUILD_DIR

# Go through page templates and generate static HTML versions.
for f in $TEMPLATES_DIR/*.twig
do
  a=${f/$TEMPLATES_DIR\//}
  b=${a/.twig/}
  echo $(php index.php --request-uri=$b) >> $BUILD_DIR/$b.html
done

# Build stylesheet file using Sass.
npx sass styles/main.scss $BUILD_DIR/styles/main.css --style compressed --no-source-map

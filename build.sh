# Clear build directory.
rm -rf build
mkdir build

# Copy all necessary files to build directory.
cp -r {downloads,images,templates,vendor,favicon.ico,index.php} build

# Build stylesheet file using Sass.
sass styles/main.scss build/styles/main.css --style compressed --no-source-map

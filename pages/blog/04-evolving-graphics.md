---
{
  "view": "templates/Post.tsx",
  "path": "/blog/evolving-graphics",
  "title": "Evolving graphics",
  "published": "2013-02-27"
}
---

Graphics for all my games were made in Paint. I used to create one huge bitmap, fill it with gray color and draw objects and animations frame after frame. It was very efficent way to draw things. I had access to other sprites just by scroling up and down.

Problems arose when I wanted to _upgrade_ the style a little bit. It was just before I started working on [Elf Elfonsinio 2](http://kalafiorgames.com/elf-elfonsinio-2). The goal was to give it little anti-aliasing and increase the overall contrast. It was really tiring and monotonous work to smooth all the gradients and borders by hand. Below is the graphic that I’ve posted at that time on previous blog. As you can see, on the left is the old style and on the right the _new_ one. This picture is in 4x zoom but in normal size borders looks quite natural.

![Before](/images/blog/before.png)

While working on this **new game**, I decided to evolve the style again. I wanted to preserve the overall feeling of the graphics (thick borders, visible dithering of the inside), but use vectors instead of bitmaps. Vectors are so much better when it comes to resizing, rotating and distorting the image.

I’ve made a test and converted some older raster graphics to vectors. Below are few of the items.

![After](/images/blog/after.png)

Some of you may already know the project I’m working on!

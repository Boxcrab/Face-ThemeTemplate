// Possible item variables
/*
    public String type;
    public String name;
    public String ambient;
    public int size;
    public boolean english;
    public int style;
    public float stroke;
    public int shadowx;
    public int shadowy;
    public int x;
    public int y;
    public float shadowRadius;
    public int shadowColor;
    public int textColor;
    public int ambTextColor;
    public String fontname;
    public boolean usesargb;
    public String argb;
    public String ambargb;
    public boolean center;
    public String clockstring;
    public boolean hue;
    public int smoothSecond;
    public String children;
    public String textModifier;
    public int spriteWidth;
    public int spriteHeight;
    public int stoprotate;
    public int startrotate;
    public boolean reverse;
    public boolean customBG;
    public String align;
    public boolean altTime;
    public String indexname;
    public String lowbitambient;
    public String packtype;
    public boolean resize;
*/

function parseHexColor(hexColor) {
  var color = Packages.android.graphics.Color;
  return color.parseColor(hexColor);
}


function customRotate(modifier, item, defaultRotation) {
  switch (modifier) {
    case "%M":
      return "60";
    default:
      return defaultRotation;
  }
}


function customString(s, x, y, item) {
  var androidColor = parseHexColor("#000000")
  androidPaint.setColor(androidColor);

  androidCanvas.drawText(s, x, y, androidPaint);

  // return to let you know what the color ended up being.
  // return here is not needed just for logging perpous
  return androidColor;
}


function customImage(item, x, y, image) {

  androidCanvas.drawBitmap(image, x, y, androidPaint);

  // return to let you know what the color ended up being.
  // return here is not needed just for logging perpous
  return "Image Drawn";
}

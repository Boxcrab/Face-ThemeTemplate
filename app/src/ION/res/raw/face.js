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

function combinedCenteredColorStrings(string, first, second, firstColor, secondColor, y, x) {
  var width = androidCanvas.getWidth();
  var textwidth = androidPaint.measureText(string);
  var centerwidth = (textwidth/width) + (width/2);

  var firstcharwidth = androidPaint.measureText(first)
  var secondcharwidth = androidPaint.measureText(second)

  androidCanvas.save();
  androidPaint.setColor(firstColor);
  androidCanvas.drawText(first, centerwidth - (secondcharwidth/2), y, androidPaint);

  androidCanvas.save();
  androidPaint.setColor(secondColor);
  androidCanvas.drawText(second, centerwidth + (firstcharwidth/2), y, androidPaint);
  androidCanvas.restore();
}


function customString(s, x, y, item, modifier) {
  var blueColor = parseHexColor("#00a2ff")
  var whiteColor = parseHexColor("#ffffff")

  var width = androidCanvas.getWidth();
  var textwidth = androidPaint.measureText(s)
  var centerwidth = (width - textwidth);

  if (modifier == "Day") {
    combinedCenteredColorStrings(s, s.charAt(0), s.charAt(1) + s.charAt(2), blueColor, whiteColor, y , x);
  }

  if (modifier == "Temp") {
    combinedCenteredColorStrings(s, s.charAt(0) + s.charAt(1), s.charAt(2), blueColor, whiteColor, y , x);
  }

  if (modifier == "Time") {
    combinedCenteredColorStrings(s, s.charAt(0) + s.charAt(1), s.charAt(2) + s.charAt(3), blueColor, whiteColor, y , x);
  }

  // return to let you know what the color ended up being.
  // return here is not needed just for logging perpous
  return modifier;
}


function customImage(item, x, y, image, rotation) {

  var w = image.getWidth();
  var h = image.getHeight();
  var newx = w / 2;
  var newy = h / 2;

  for (var i = rotation; i > 0; i-6) {
    androidCanvas.save();
    androidCanvas.rotate(i, newx, newy);
    androidCanvas.drawBitmap(image, x, y, androidPaint);
    androidCanvas.restore();

    i = i - 6;
  }

  // return to let you know what the color ended up being.
  // return here is not needed just for logging perpous
  return "Image Drawn NEW: " + i;
}

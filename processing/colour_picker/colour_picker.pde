import java.awt.*;
import java.awt.event.*;
import java.awt.datatransfer.*;
import javax.swing.*;
import java.io.*;

String colour = "";

void setup() {
  size(360, 360);
  colorMode(HSB, 360);
  background(20, 100, 100);
}

void draw() {
  colourPicker();
}

void colourPicker() {
  background(mouseX, mouseY, 360);
  textSize(18);
  fill(0);
  colour = "HSB("+mouseX+","+mouseY+",360)";
  text(colour, 5, 355);
}

void mouseClicked() {
  StringSelection data = new StringSelection(colour);
  Clipboard clipboard = 
    Toolkit.getDefaultToolkit().getSystemClipboard();
  clipboard.setContents(data, data);
}

//Udemy Web developer Bootcamp //
//=======================================================================

//**************************************/
//  *FACTORY FUNCTION*
//************************************ */

/* function makeColor(r, g, b) {
    const colour = {};
    colour.r = r;
    colour.g = g;
    colour.b = b;
    colour.rgb = function () {
        const { r, g, b } = this;
        return `rgb (${r}, ${g}, ${b})`;

    }

    colour.hex = function () {
        return (`#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };

    return colour;
}

const firstColor = makeColor(230, 156, 234);
firstColor.hex();
firstColor.rgb(); */

//========================================================================//


//*********************************
//NEW OPERATOR !
//********************************
// The new keyword does the following things:

// 1. Creates a blank, plain JavaScript object.
// 2. Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).

// 3. Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
// 4. Returns this if the function doesn't return an object.
/*
function color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;

}
color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb (${r}, ${g}, ${b})`;
};

color.prototype.hex = function () {
    const { r, g, b } = this;
    return (`#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
};
color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;

};


const color1 = new color(213, 234, 200);       //Console output cmd // color1.rgb()
const color2 = new color(100, 212, 218);           //color2.hex()
const color3 = new color(213, 100, 240);

 */
//========================================================================================================//

//********************************
//   CLASS & CONSTRUCTOR  //
//********************************

// For constructor function and class user first letter capital
/*
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;

    }
    rgb() {
        const { r, g, b } = this;
        return `rgb (${r}, ${g}, ${b})`;
    }
    hex() {
        const { r, g, b } = this;
        return (`#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    }
    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }


    RgbtoHsl() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        // Calculate hue
        // No difference
        if (delta == 0)
            h = 0;
        // Red is max
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g)
            h = (b - r) / delta + 2;
        // Blue is max
        else
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0)
            h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;

        return "hsl(" + h + "," + s + "%," + l + "%)";



        //return `hsl(${h},${s},${l})`;
    }
}

const c1 = new Color(120, 200, 210) */

/* Comment
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
  comment end*/


  //==============================================================================================
  //*************************************
         //EXTENDS & SUPER KEYWORD
  //************************************** 


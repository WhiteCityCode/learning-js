/**
 * It's 1966 and I just got hired by Dacom (short for Data Compression) to
 * work on a new, digital, facsimile machine, to compete with the likes of Xerox
 * Corporation.
 *
 * Turns out that these machines simply scan the document into a matrix of
 * pixels, line by line. Each pixel has a value between 0 and 255. The higher
 * the value, the darker the pixel.
 *
 * So a scanline can be represented in an array like:
 *
 * [0, 0, 0, 0, 0, 128, 128, 255, 255, 0, 0, 0, 0, 0, 128, 255, 128, 0, 0, 0]
 *
 * Which would correlate to a scanline that looks like:
 *
 * ░░░░░▒▒▓▓░░░░░▒▓▒░░░
 *
 * So you could imagine a machine capable of 9 scanlines, with 32 pixels per
 * scanline, representing a lowercase `a` something like this:
 *
 *      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 *      ░░░░░░░░░▓▓▓▓▓▓▓▒░░░░░░░░░░░░
 *      ░░░░░░▒▓▓▒░░░░░▒▓▓▓░░░░░░░░░░
 *      ░░░░░░░░░░░░░░░░▓▓▓░░░░░░░░░░
 *      ░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░
 *      ░░░░░▒▓▓▒░░░░░░░▓▓▓░░░░░░░░░░
 *      ░░░░░▒▓▓▓░░░░░░▓▓▓▓░░░░░░░░░░
 *      ░░░░░░▒▓▓▓▓▓▓▒▒▒▓▓░░░░░░░░░░░
 *      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 *
 * This is all good, but even this small document is quite large, at a whooping
 * 288 bytes. Sooo, that works out to about 1 second to transmit this image
 * using a modern 2400bps modem. And several minutes for a letter sized
 * document.
 *
 * Which means that we're on par with the latest and greatest machine from Xerox
 * Corporation - the slim 21kg machine - the Magnafax Telecopiers.
 *
 * However, as I said, our company is literally named "Data Compression". I was
 * talking with Donald W. the other day and we realized that most of the data
 * represents the white page, rather than what we care about (the actual printed
 * information).
 *
 * What if we take one of our regular scanlines:
 * [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 128, 255, 128, 0, 0, 0]
 *
 * And represent it as an array of tuples, where the first element represents
 * a number of zeroes, and the second element represents the first non-zero
 * number? So the above becomes:
 *
 * [[11, 255], [5, 128], [0, 255], [0, 128], [3]]
 *
 * Here's a breakdown:
 *
 * [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 0, 0, 0, 0, 0, 128, 255, 128, 0, 0, 0]
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^       ^^^^^^^^^^^^^
 *  [11 zeroes,                      255] [5 zeroes,     128] ...
 *
 * If a number greater than 0 follows another non-zero number, then it's encoded
 * as [0, the_number], and if we have trailing zeroes, like in the case above,
 * we encode only the number of zeroes that are trailing.
 *
 * So given a single scanline, return the compressed version.
 */

export const compress = (scanline) => {
  return scanline;
};

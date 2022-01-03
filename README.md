# Google interview exercise "Merge two black and white images"

This is my solution of the Google interview exercise "Merge two black and white images". See https://leetcode.com/discuss/interview-question/274236/google-onsite-merge-two-black-and-white-images.

## Exercise

You are provided with two images of black and white tiles. Every tile can be separated into exactly four smaller tiles. Those smaller tiles can again be separated into four smaller tiles a.s.o. Both images have the extact same structure of tiles. Calculate a third such image representing the merge of both images.

The merge of two tiles is defined as follows:

-   tile 1 is white, tile 2 is white -> result is white
-   tile 1 is white, tile 2 is black -> result is black
-   tile 1 is black, tile 2 is white -> result is black
-   tile 1 is black, tile 2 is black -> result is black

## Example:

![Example](example.png 'Example')

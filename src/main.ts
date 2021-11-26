import * as util from 'util';

interface Tile {
    color?: number; // 0 = white, 1 = black
    subtiles: Tile[];
}

function mergeTiles(tile1: Tile, tile2: Tile): Tile {
    if (tile1?.subtiles?.length > 0) {
        const subtiles = [];
        for (let i = 0; i < 4; i++) {
            subtiles[i] = mergeTiles(tile1.subtiles[i], tile2.subtiles[i]);
        }
        return {
            subtiles,
        };
    } else {
        return {
            color: tile1.color || tile2.color,
            subtiles: [],
        };
    }
}

function main() {
    const tile1: Tile = {
        subtiles: [
            {
                color: 1,
                subtiles: [],
            },
            {
                color: 0,
                subtiles: [],
            },
            {
                color: 0,
                subtiles: [],
            },
            {
                subtiles: [
                    {
                        color: 0,
                        subtiles: [],
                    },
                    {
                        color: 1,
                        subtiles: [],
                    },
                    {
                        color: 0,
                        subtiles: [],
                    },
                    {
                        color: 0,
                        subtiles: [],
                    },
                ],
            },
        ],
    };

    const tile2: Tile = {
        subtiles: [
            {
                color: 0,
                subtiles: [],
            },
            {
                color: 0,
                subtiles: [],
            },
            {
                color: 1,
                subtiles: [],
            },
            {
                subtiles: [
                    {
                        color: 0,
                        subtiles: [],
                    },
                    {
                        color: 1,
                        subtiles: [],
                    },
                    {
                        color: 0,
                        subtiles: [],
                    },
                    {
                        color: 1,
                        subtiles: [],
                    },
                ],
            },
        ],
    };

    const result = mergeTiles(tile1, tile2);
    // deep print result
    console.log(util.inspect(result, false, null));
}

main();

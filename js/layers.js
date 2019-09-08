const globalLayers =       [
    {
        "id": "background",
        //地图背景
        "type": "background",
        "layout": {},
        "paint": {
            "background-color": {
                "base": 1,
                "stops": [
                    [
                        11,
                        "hsl(35, 32%, 91%)"
                    ],
                    [
                        13,
                        "hsl(35, 12%, 89%)"
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "river",
        "type": "line",
        "source": "china",
        "source-layer": "river",
        "minzoom": 5,
        "maxzoom": 15,
        "paint": {
            "line-color": "#a0cfdf",
            "line-width": {
                "base": 1.4,
                "stops": [
                    [
                        8,
                        0.5
                    ],
                    [
                        20,
                        15
                    ]
                ]
            }
        }
    }, {
        "id": "lake",
        "type": "fill",
        "source": "china",
        "source-layer": "lake",
        "paint": {
            "fill-color": "hsl(195, 50%, 75%)"
        }
    }, {
        "id": "road_major",
        "type": "line",
        "source": "china",
        "source-layer": "road",
        "minzoom": 4,
        "maxzoom": 15,
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        5,
                        0.75
                    ],
                    [
                        18,
                        32
                    ]
                ]
            },
            "line-color": {
                "base": 1,
                "stops": [
                    [
                        8,
                        "hsl(26, 87%, 62%)"
                    ],
                    [
                        9,
                        "hsl(26, 100%, 68%)"
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "road--case",
        "type": "line",
        "source": "china",
        "source-layer": "road",
        "minzoom": 10,
        "maxzoom": 15,
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        10,
                        1
                    ],
                    [
                        16,
                        2
                    ]
                ]
            },
            "line-color": "hsl(0, 0%, 100%)",
            "line-gap-width": {
                "base": 1.5,
                "stops": [
                    [
                        5,
                        0.75
                    ],
                    [
                        18,
                        32
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "boundaries-bg",
        "type": "line",
        "source": "china",
        "source-layer": "border",
        "minzoom": 1,
        "layout": {
            "line-join": "miter"
        },
        "paint": {
            "line-width": {
                "base": 1,
                "stops": [
                    [
                        3,
                        3.5
                    ],
                    [
                        10,
                        8
                    ]
                ]
            },
            "line-color": {
                "base": 1,
                "stops": [
                    [
                        6,
                        "hsl(35, 12%, 89%)"
                    ],
                    [
                        8,
                        "hsl(230, 49%, 90%)"
                    ]
                ]
            },
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        3,
                        0
                    ],
                    [
                        4,
                        0.5
                    ]
                ]
            },
            "line-translate": [
                0,
                0
            ],
            "line-blur": {
                "base": 1,
                "stops": [
                    [
                        3,
                        0
                    ],
                    [
                        10,
                        2
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "admin-2-boundaries",
        "type": "line",
        "source": "china",
        "source-layer": "border",
        "minzoom": 1,
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "hsl(230, 8%, 51%)",
            "line-width": {
                "base": 1,
                "stops": [
                    [
                        3,
                        0.5
                    ],
                    [
                        10,
                        2
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "provincepoint",
        "type": "symbol",
        "source": "china",
        "source-layer": "provincepoint",
        "maxzoom": 16,
        "layout": {
            "icon-image": "dot-11",
            "text-font": {
                "base": 1,
                "stops": [
                    [
                        7,
                        [
                            "Microsoft YaHei",
                        ]
                    ],
                    [
                        8,
                        [
                            "Microsoft YaHei",
                        ]
                    ]
                ]
            },
            "text-offset": {
                "base": 1,
                "stops": [
                    [
                        7.99,
                        [
                            0,
                            0.15
                        ]
                    ],
                    [
                        8,
                        [
                            0,
                            0
                        ]
                    ]
                ]
            },
            "text-anchor": {
                "base": 1,
                "stops": [
                    [
                        7,
                        "top"
                    ],
                    [
                        8,
                        "center"
                    ]
                ]
            },
            "text-field": "{name}",
            "text-max-width": 7,
            "text-size": {
                "base": 0.9,
                "stops": [
                    [
                        4,
                        12
                    ],
                    [
                        10,
                        22
                    ]
                ]
            }
        },
        "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1,
            "icon-opacity": {
                "base": 1,
                "stops": [
                    [
                        7.99,
                        1
                    ],
                    [
                        8,
                        0
                    ]
                ]
            },
            "text-halo-blur": 1
        },
        "interactive": true
    }, {
        "id": "admin-3-4-boundaries",
        "type": "line",
        "source": "china",
        "source-layer": "province",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-dasharray": {
                "base": 1,
                "stops": [
                    [
                        6,
                        [
                            2,
                            0
                        ]
                    ],
                    [
                        7,
                        [
                            2,
                            2,
                            6,
                            2
                        ]
                    ]
                ]
            },
            "line-width": {
                "base": 1,
                "stops": [
                    [
                        7,
                        0.75
                    ],
                    [
                        12,
                        1.5
                    ]
                ]
            },
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        2,
                        0
                    ],
                    [
                        3,
                        1
                    ]
                ]
            },
            "line-color": {
                "base": 1,
                "stops": [
                    [
                        3,
                        "hsl(230, 14%, 77%)"
                    ],
                    [
                        7,
                        "hsl(230, 8%, 62%)"
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "admin-3-4-boundaries-bg",
        "type": "line",
        "source": "china",
        "source-layer": "province",
        "layout": {
            "line-join": "bevel"
        },
        "paint": {
            "line-color": {
                "base": 1,
                "stops": [
                    [
                        8,
                        "hsl(35, 12%, 89%)"
                    ],
                    [
                        16,
                        "hsl(230, 49%, 90%)"
                    ]
                ]
            },
            "line-width": {
                "base": 1,
                "stops": [
                    [
                        7,
                        3.75
                    ],
                    [
                        12,
                        5.5
                    ]
                ]
            },
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        7,
                        0
                    ],
                    [
                        8,
                        0.75
                    ]
                ]
            },
            "line-dasharray": [
                1,
                0
            ],
            "line-translate": [
                0,
                0
            ],
            "line-blur": {
                "base": 1,
                "stops": [
                    [
                        3,
                        0
                    ],
                    [
                        8,
                        3
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "road-rail",
        "type": "line",
        "source": "china",
        "source-layer": "railway",
        "minzoom": 5,
        "layout": {
            "line-join": "round"
        },
        "paint": {
            "line-color": {
                "stops": [
                    [
                        10,
                        "hsl(50, 17%, 82%)"
                    ],
                    [
                        13,
                        "hsl(230, 10%, 74%)"
                    ]
                ]
            },
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        0.5
                    ],
                    [
                        17,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    },
    {
        "id": "road-rail-tracks",
        "type": "line",
        "source": "china",
        "source-layer": "railway",
        "minzoom": 5,
        "layout": {
            "line-join": "round"
        },
        "paint": {
            "line-color": {
                "stops": [
                    [
                        10,
                        "hsl(50, 17%, 82%)"
                    ],
                    [
                        13,
                        "hsl(230, 10%, 74%)"
                    ]
                ]
            },
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        4
                    ],
                    [
                        17,
                        8
                    ]
                ]
            },
            "line-dasharray": [
                0.1,
                15
            ],
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        10.75,
                        0
                    ],
                    [
                        11,
                        1
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "place-city-sm",
        "type": "symbol",
        "source": "china",
        "source-layer": "countypoint",
        "minzoom": 6,
        "layout": {
            "text-size": {
                "base": 1,
                "stops": [
                    [
                        6,
                        12
                    ],
                    [
                        14,
                        22
                    ]
                ]
            },
            "icon-image": "dot-9",
            "text-font": {
                "base": 1,
                "stops": [
                    [
                        7,
                        [
                            "Microsoft YaHei"
                        ]
                    ],
                    [
                        8,
                        [
                            "Microsoft YaHei"
                        ]
                    ]
                ]
            },
            "text-offset": {
                "base": 1,
                "stops": [
                    [
                        7.99,
                        [
                            0,
                            -0.2
                        ]
                    ],
                    [
                        8,
                        [
                            0,
                            0
                        ]
                    ]
                ]
            },
            "text-anchor": {
                "base": 1,
                "stops": [
                    [
                        7,
                        "bottom"
                    ],
                    [
                        8,
                        "center"
                    ]
                ]
            },
            "text-field": "{name}",
            "text-max-width": 7
        },
        "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1.25,
            "icon-opacity": {
                "base": 1,
                "stops": [
                    [
                        7.99,
                        1
                    ],
                    [
                        8,
                        0
                    ]
                ]
            }
        },
        "interactive": true
    }, {
        "id": "county-primary",
        "type": "line",
        "source": "china",
        "source-layer": "county",
        "minzoom": 7,
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        5,
                        0.75
                    ],
                    [
                        18,
                        32
                    ]
                ]
            },
            "line-color": {
                "base": 1,
                "stops": [
                    [
                        5,
                        "hsl(35, 32%, 91%)"
                    ],
                    [
                        7,
                        "hsl(0, 0%, 100%)"
                    ]
                ]
            },
            "line-opacity": 1
        },
        "interactive": true
    } , {
        "id": "landcover_crop",
        "type": "fill",
        "source": "china",
        "source-layer": "province",
        "maxzoom": 14,
        "layout": {},
        "paint": {
            "fill-color": "hsl(75, 62%, 81%)",
            "fill-opacity": {
                "base": 1.5,
                "stops": [
                    [
                        2,
                        0.3
                    ],
                    [
                        7,
                        0
                    ]
                ]
            },
            "fill-antialias": false
        },
        "interactive": true
    }]
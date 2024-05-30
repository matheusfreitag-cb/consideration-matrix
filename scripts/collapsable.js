var chart_config = {
  chart: {
    container: "#collapsable-example",
    animateOnInit: false,
    node: {
      collapsable: true,
    },
    animation: {
      connectorsAnimation: "linear",
      connectorsSpeed: 200,
    },
  },
  nodeStructure: {
    innerHTML: `
        <div class="node-content level-1">
        <h1>Smartphones | Apple</h1>
        <p>N SKU's | 3 main models</p>
        </div>
    `,
    collapsable: true,
    stackChildren: true,
    children: [
      {
        innerHTML: `
            <div class="node-content level-2">
            <h2>iPhone 13</h2>
            <p>N SKU's | 2 main models </p>
            </div>
        `,
        collapsable: true,
        childrenDropLevel: 1,
        stackChildren: true,
        children: [
          {
            innerHTML: `
            <div class="node-content level-3">
            <h3>iPhone 13</h3>
            <p>1 model</p>
            </div>
        `,
            collapsed: false,
            childrenDropLevel: 1,
            stackChildren: true,
            children: [
              {
                innerHTML: `
                      <div class="node-content level-4">
                      <h4>6.1 inch</h4>
                      <p>3 models</p>
                      </div>
                  `,
                collapsed: false,
                childrenDropLevel: 1,
                stackChildren: true,
                children: [
                  {
                    innerHTML: `
                            <div class="node-content level-5">
                            <h5>256GB</h5>
                            <p>6 models</p>
                            </div>
                        `,
                    collapsed: false,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                  <div class="node-content level-6">
                                  <p class="h6">Green</p>
                                  </div>
                              `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                  <div class="node-content level-6">
                                  <p class="h6">Blue</p>
                                  </div>
                              `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                  <div class="node-content level-6">
                                  <p class="h6" >Red</p>
                                  </div>
                              `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                  <div class="node-content level-6">
                                  <p class="h6">White</p>
                                  </div>
                              `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                  <div class="node-content level-6">
                                  <p class="h6">Pink</p>
                                  </div>
                              `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                  <div class="node-content level-6">
                                  <p class="h6">Black</p>
                                  </div>
                              `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                              <div class="node-content level-5">
                              <h5>512GB</h5>
                              <p>3 models</p>
                              </div>
                          `,
                    collapsed: false,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">Green</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">Blue</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6" >Red</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">White</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">Pink</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">Black</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                              <div class="node-content level-5">
                              <h5>128GB</h5>
                              <p>3 models</p>
                              </div>
                          `,
                    collapsed: false,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">Green</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">Blue</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6" >Red</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">White</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">Pink</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                    <div class="node-content level-6">
                                    <p class="h6">Black</p>
                                    </div>
                                `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            innerHTML: `
            <div class="node-content level-3">
            <h3>iPhone 13 Mini</h3>
            <p>1 size</p>
            </div>
        `,
            collapsed: false,
            childrenDropLevel: 1,
            stackChildren: true,
            children: [
              {
                innerHTML: `
                        <div class="node-content level-4">
                        <h4>5.4 inch</h4>
                        <p>2 models</p>
                        </div>
                    `,
                collapsed: false,
                childrenDropLevel: 1,
                stackChildren: true,
                children: [
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h4>128GB</h4>
                        <p>4 colors</p>
                        </div>
                    `,
                    collapsed: false,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                      <div class="node-content level-6">
                                      <p class="h6">Green</p>
                                      </div>
                                  `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                      <div class="node-content level-6">
                                      <p class="h6">Blue</p>
                                      </div>
                                  `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                      <div class="node-content level-6">
                                      <p class="h6">White</p>
                                      </div>
                                  `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                      <div class="node-content level-6">
                                      <p class="h6">Black</p>
                                      </div>
                                  `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>512GB</h5>
                        <p>1 color</p>
                        </div>
                    `,
                    collapsed: false,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                        <div class="node-content level-6">
                                        <p class="h6">White</p>
                                        </div>
                                    `,
                        collapsed: false,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        innerHTML: `
            <div class="node-content level-2">
            <h2>iPhone 14</h2>
            <p>N SKU's | 4 main models</p>
            </div>
        `,
        collapsable: true,
        childrenDropLevel: 1,
        stackChildren: true,
        children: [
          {
            innerHTML: `
            <div class="node-content level-3">
            <h3>iPhone 14 Plus</h3>
            <p>1 size</p>
            </div>
        `,
            collapsable: true,
            childrenDropLevel: 1,
            stackChildren: true,
            children: [
              {
                innerHTML: `
                  <div class="node-content level-4">
                  <h4>6.7 inch</h4>
                  <p>3 models</p>
                  </div>
              `,
                collapsable: true,
                childrenDropLevel: 1,
                stackChildren: true,
                children: [
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>128GB</h5>
                        <p>6 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Red</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Black</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">White</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Purple</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Blue</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Yellow</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>256GB</h5>
                        <p>6 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Red</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Black</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">White</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Purple</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Blue</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Yellow</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>512GB</h5>
                        <p>6 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Red</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Black</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">White</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Purple</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Blue</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Yellow</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            innerHTML: `
            <div class="node-content level-3">
            <h3>iPhone 14</h3>
            <p>1 size</p>
            </div>
        `,
            collapsable: true,
            childrenDropLevel: 1,
            stackChildren: true,
            children: [
              {
                innerHTML: `
                  <div class="node-content level-4">
                  <h4>6.1 inch</h4>
                  <p>3 models</p>
                  </div>
              `,
                collapsable: true,
                childrenDropLevel: 1,
                stackChildren: true,
                children: [
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>128GB</h5>
                        <p>6 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Red</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Black</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">White</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Purple</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Blue</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Yellow</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>256GB</h5>
                        <p>6 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Red</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Black</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">White</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Purple</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Blue</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Yellow</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>512GB</h5>
                        <p>6 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Red</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Black</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">White</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Purple</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Blue</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Yellow</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            innerHTML: `
            <div class="node-content level-3">
            <h3>iPhone 14 Pro</h3>
            <p>1 size</p>
            </div>
        `,
            collapsable: true,
            childrenDropLevel: 1,
            stackChildren: true,
            children: [
              {
                innerHTML: `
                  <div class="node-content level-4">
                  <h4>6.1 inch</h4>
                  <p>3 models</p>
                  </div>
              `,
                collapsable: true,
                childrenDropLevel: 1,
                stackChildren: true,
                children: [
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>128GB</h5>
                        <p>2 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Black</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Purple</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>256GB</h5>
                        <p>2 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Black</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Purple</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>512GB</h5>
                        <p>2 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                            <div class="node-content level-6">
                            <p class="h6">Black</p>
                            <p></p>
                            </div>
                        `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                            <div class="node-content level-6">
                            <p class="h6">Purple</p>
                            <p></p>
                            </div>
                        `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            innerHTML: `
            <div class="node-content level-3">
            <h3>iPhone 14 Pro Max</h3>
            <p>1 size</p>
            </div>
        `,
            collapsable: true,
            childrenDropLevel: 1,
            stackChildren: true,
            children: [
              {
                innerHTML: `
                  <div class="node-content level-4">
                  <h4>6.7 inch</h4>
                  <p>4 models</p>
                  </div>
              `,
                collapsable: true,
                childrenDropLevel: 1,
                stackChildren: true,
                children: [
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>128GB</h5>
                        <p>2 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Black</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                  <div class="node-content level-6">
                                  <p class="h6">Purple</p>
                                  <p></p>
                                  </div>
                              `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>256GB</h5>
                        <p>2 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                              <div class="node-content level-6">
                              <p class="h6">Black</p>
                              <p></p>
                              </div>
                          `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                      {
                        innerHTML: `
                                <div class="node-content level-6">
                                <p class="h6">Purple</p>
                                <p></p>
                                </div>
                            `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>512GB</h5>
                        <p>2 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                  },
                  {
                    innerHTML: `
                        <div class="node-content level-5">
                        <h5>1TB</h5>
                        <p>1 colors</p>
                        </div>
                    `,
                    collapsable: true,
                    childrenDropLevel: 1,
                    stackChildren: true,
                    children: [
                      {
                        innerHTML: `
                            <div class="node-content level-6">
                            <p class="h6">Black</p>
                            <p></p>
                            </div>
                        `,
                        collapsable: true,
                        childrenDropLevel: 1,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

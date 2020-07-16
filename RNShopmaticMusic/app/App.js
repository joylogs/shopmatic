/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import groupBy from 'lodash/groupBy';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  getTopAlbums
} from '../config/api'

var mockData = [
  {
    "id": 1,
    "title": "Passed Orders",
    "innerArray": [{
      "id": 1,
      "im:name": [
        {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }
      ],
      "star": "150",
      "im:price": {
        "label": "$19.99",
        "attributes": {
          "amount": "19.99000",
          "currency": "USD"
        }
      },
      "im:image": [
        {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }
      ]
    }, {
      "id": 2,
      "im:name": [
        {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }
      ],
      "star": "150",
      "im:price": {
        "label": "$19.99",
        "attributes": {
          "amount": "19.99000",
          "currency": "USD"
        }
      },
      "im:image": [
        {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }
      ]
    }, {
      "id": 4,
      "im:price": {
        "label": "$19.99",
        "attributes": {
          "amount": "19.99000",
          "currency": "USD"
        }
      },
      "im:name": [
        {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }
      ],
      "star": "150",
      "im:price": {
        "label": "$19.99",
        "attributes": {
          "amount": "19.99000",
          "currency": "USD"
        }
      },
      "im:image": [
        {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/55x55bb.png",
          "attributes": {
            "height": "55"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/60x60bb.png",
          "attributes": {
            "height": "60"
          }
        },
        {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/da/a3/4a/daa34a3a-cce7-c9f0-9c5e-267f63f8b3e3/075679909183.jpg/170x170bb.png",
          "attributes": {
            "height": "170"
          }
        }
      ]
    }]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataArr: mockData
    };
    console.log('Props from native', props)
  }

  componentDidMount() {
    this.loadApiData()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, width: '95%', backgroundColor: '#FFFFFF', alignSelf: 'center' }}>
          <FlatList data={this.state.dataArr}
            extraData={this.state}
            // style={{marginBottom: 200}}
            renderItem={({ item }) =>
              <View
                style={{ marginTop: 0, width: '100%' }} >
                <View style={{ paddingTop: 10, paddingBottom: 0, flexDirection: 'column' }}>
                  <View style={{ backgroundColor: '#000000', paddingHorizontal: 20, borderRadius: 10, elevation: 1, shadowColor: "#0000002B", shadowRadius: 3, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1.0 }}>
                    <Text style={{ fontSize: 30, fontFamily: 'System', color: '#FFFFFF', textAlign: 'center', paddingHorizontal: 20, paddingVertical: 4 }}>{item.title}</Text>
                  </View>
                  <FlatList data={item.innerArray}
                    extraData={this.state}
                    horizontal={true}
                    style={{ marginTop: 10 }}
                    renderItem={({ item: innerData, index }) =>
                      <View style={{ width: 100, height: 100, backgroundColor: "#FFFFFF", padding: 5 }}>
                        <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                          <Text style={{ fontSize: 12, fontFamily: 'System', color: '#747474', textAlign: 'center', }} numberOfLines={1}>{innerData["im:name"]["label"]}</Text>
                          <View style={{ marginTop: 3, flex: 1, width: '100%', borderRadius: 10, elevation: 1, shadowColor: "#0000002B", shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1.0, backgroundColor: '#FFFFFF' }}>
                            <Image
                              style={{ width: '100%', height: '100%', borderRadius: 10 }}
                              source={{ uri: innerData["im:image"][2]["label"] }}
                            />
                          </View>

                          <View style={{ backgroundColor: 'yellow', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 1, borderRadius: 10, position: 'absolute', bottom: 6 }}>
                            <Image
                              style={{ width: 12, height: 12 }}
                            // source={require('../SupportingFiles/Icons/black-star.png')}
                            />
                            <Text style={{ fontSize: 10, fontFamily: 'System', color: '#000000', textAlign: 'center', alignSelf: 'center', marginLeft: 1 }}>{innerData["im:price"]["label"]}</Text>
                          </View>

                        </TouchableOpacity>
                      </View>
                    } />
                </View>
              </View>
            } />
        </View>
      </SafeAreaView>
    );
  }

  loadApiData() {
    const promiseArray = [];
    promiseArray.push(getTopAlbums())
    Promise.all(promiseArray).then(data => {

      var groupedArray = groupBy(data[0], 'category.attributes.term')
      console.log("This is called from app.js", groupedArray)

      const listedAlbums = [];
      const keysGroupedArray = Object.keys(groupedArray);
      const valuesGroupedArray = Object.values(groupedArray);

      for (let i = 0; i < keysGroupedArray.length; i++) {
        listedAlbums.push({
          title: keysGroupedArray[i],
          innerArray: valuesGroupedArray[i]
        });
      }
      this.setState(
        { dataArr: listedAlbums }
      );
    })
      .catch(e => {
        console.log("some error occurred");
      })
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    // paddingHorizontal: 24,
    paddingVertical: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

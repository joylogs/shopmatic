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

var data = [
  {
    "id": 1,
    "title": "Passed Orders",
    "innerArray": [{
      "id": 1,
      "name": "Shivam Tiwari 1",
      "star": "150",
      "image": "https://lh3.googleusercontent.com/-sUUgyO92gjw/Xe5Df6MwaZI/AAAAAAAABDc/bYtyIbnUM8ACX83GYB7-XjFzs-HAmbE1QCK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 2,
      "name": "Shivam Tiwari 2",
      "star": "150",
      "image": "https://lh3.googleusercontent.com/-OUEDRCj2dQo/Xe5Da2ZmqhI/AAAAAAAABDM/j9qXtid6afYaHNi-pwsOlVOUUdFej-dXgCK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 4,
      "name": "Shivam Tiwari 4",
      "star": "150",
      "image": "https://lh3.googleusercontent.com/-ja97CHMzpN4/Xe5DcMVro2I/AAAAAAAABDQ/Z0Tht5w0TIUw37t8newe5YF6RgZYayXFwCK8BGAsYHg/s0/2019-12-09.jpg"
    }]
  },
  {
    "id": 2,
    "title": "Top People",
    "innerArray": [{
      "id": 5,
      "name": "Shivam Tiwari",
      "star": "15000",
      "image": "https://lh3.googleusercontent.com/-1NXIa1zFf7E/Xe5DyVxnkHI/AAAAAAAABDg/BTB_V4UtLNwQHqIrIXKl6cMKlutU7h3JACK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 6,
      "name": "Shubham Tripathi",
      "star": "45",
      "image": "https://lh3.googleusercontent.com/-ja97CHMzpN4/Xe5DcMVro2I/AAAAAAAABDQ/Z0Tht5w0TIUw37t8newe5YF6RgZYayXFwCK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 7,
      "name": "Kartikeya Sharma",
      "star": "55",
      "image": "https://lh3.googleusercontent.com/-sUUgyO92gjw/Xe5Df6MwaZI/AAAAAAAABDc/bYtyIbnUM8ACX83GYB7-XjFzs-HAmbE1QCK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 8,
      "name": "Manoj",
      "star": "90",
      "image": "https://lh3.googleusercontent.com/-ulyCVQkAlK4/Xe5DZjhE9dI/AAAAAAAABDI/1zgelciGvyE67cOYEqD-XRlmO-JQAW-yACK8BGAsYHg/s0/2019-12-09.jpg"
    }]
  },
  {
    "id": 3,
    "title": "Favourite Celeb",
    "innerArray": [{
      "id": 9,
      "name": "Manoj Kumar Verma",
      "star": "20",
      "image": "https://lh3.googleusercontent.com/-OUEDRCj2dQo/Xe5Da2ZmqhI/AAAAAAAABDM/j9qXtid6afYaHNi-pwsOlVOUUdFej-dXgCK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 10,
      "name": "Ashish",
      "star": "10",
      "image": "https://lh3.googleusercontent.com/-ulyCVQkAlK4/Xe5DZjhE9dI/AAAAAAAABDI/1zgelciGvyE67cOYEqD-XRlmO-JQAW-yACK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 11,
      "name": "Balendu Tiwari",
      "star": "150",
      "image": "https://lh3.googleusercontent.com/-ja97CHMzpN4/Xe5DcMVro2I/AAAAAAAABDQ/Z0Tht5w0TIUw37t8newe5YF6RgZYayXFwCK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 12,
      "name": "Amit Kumar Singh",
      "star": "200",
      "image": "https://lh3.googleusercontent.com/-1NXIa1zFf7E/Xe5DyVxnkHI/AAAAAAAABDg/BTB_V4UtLNwQHqIrIXKl6cMKlutU7h3JACK8BGAsYHg/s0/2019-12-09.jpg"
    }]
  },
  {
    "id": 4,
    "title": "Custom Celebrity",
    "innerArray": [{
      "id": 13,
      "name": "Manoj Kumar Verma",
      "star": "20",
      "image": "https://lh3.googleusercontent.com/-OUEDRCj2dQo/Xe5Da2ZmqhI/AAAAAAAABDM/j9qXtid6afYaHNi-pwsOlVOUUdFej-dXgCK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 14,
      "name": "Ashish",
      "star": "10",
      "image": "https://lh3.googleusercontent.com/-ulyCVQkAlK4/Xe5DZjhE9dI/AAAAAAAABDI/1zgelciGvyE67cOYEqD-XRlmO-JQAW-yACK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 15,
      "name": "Balendu Tiwari",
      "star": "150",
      "image": "https://lh3.googleusercontent.com/-ja97CHMzpN4/Xe5DcMVro2I/AAAAAAAABDQ/Z0Tht5w0TIUw37t8newe5YF6RgZYayXFwCK8BGAsYHg/s0/2019-12-09.jpg"
    }, {
      "id": 16,
      "name": "Amit Kumar Singh",
      "star": "200",
      "image": "https://lh3.googleusercontent.com/-1NXIa1zFf7E/Xe5DyVxnkHI/AAAAAAAABDg/BTB_V4UtLNwQHqIrIXKl6cMKlutU7h3JACK8BGAsYHg/s0/2019-12-09.jpg"
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
      dataArr: data
    };
    console.log('Props from native', props)
  }

  componentDidMount() {
    this.loadApiData()
  }

  groupBy = (data, key) => {
    return data.reduce(function (acc, item) {
      (acc[item[key]] = acc[item[key]] || []).push(item);
      return acc;
    }, {});
  };

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
                          <Text style={{ fontSize: 15, fontFamily: 'System', color: '#747474', textAlign: 'center', }} numberOfLines={1}>{innerData.name}</Text>
                          <View style={{ marginTop: 3, flex: 1, width: '100%', borderRadius: 10, elevation: 1, shadowColor: "#0000002B", shadowRadius: 2, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1.0, backgroundColor: '#FFFFFF' }}>
                            <Image
                              style={{ width: '100%', height: '100%', borderRadius: 10 }}
                              source={{ uri: innerData.image }}
                            />
                          </View>

                          <View style={{ backgroundColor: 'yellow', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 1, borderRadius: 10, position: 'absolute', bottom: 6 }}>
                            <Image
                              style={{ width: 12, height: 12 }}
                            // source={require('../SupportingFiles/Icons/black-star.png')}
                            />
                            <Text style={{ fontSize: 15, fontFamily: 'System', color: '#000000', textAlign: 'center', alignSelf: 'center', marginLeft: 3 }}>{innerData.star}</Text>
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
      // console.log("This is called from app.js", data[0])

      var groupedArray = groupBy(data[0], 'category.attributes.term')
      console.log("This is called from app.js", groupedArray)

      // console.log("This is called from app.js", groupedArray['key'])

      // groupedArray['key']

      this.setState (
          // {dataArr : groupedArray}
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

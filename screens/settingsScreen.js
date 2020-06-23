import React from 'react';
import {View, Text} from 'react-native';


//for the query.
//setting apollo up for graphql.
import {ApolloClient} from 'apollo-boost';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http'; 

import gql from 'graphql-tag';
import {Query} from '@apollo/react-hooks';




export default function CountryStatScreen() {
  return (
      <View>
        <Text>Fetching country stats......</Text>
      </View>
      );
      }



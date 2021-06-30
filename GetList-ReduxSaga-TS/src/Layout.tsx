import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Text, Pressable } from "react-native";

import {
  getPendingSelector,
  getUsersSelector,
  getErrorSelector,
} from "./store/user/selectors";
import { fetchUserRequest } from "./store/user/actions";

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const users = useSelector(getUsersSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <Pressable style={{backgroundColor:'red', padding: 20}} onPress= {() =>dispatch(fetchUserRequest())}>
        <Text>Fetch</Text>
      </Pressable>
      {pending ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error</Text>
      ) : (
        users.map((user, index) => (
          <Text key={user.id}>
            {++index}. {user.name}
          </Text>
        ))
      )}
    </ScrollView>
  );
};

export default App;
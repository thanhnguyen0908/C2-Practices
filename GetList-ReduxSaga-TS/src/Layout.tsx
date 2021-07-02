import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, Pressable, View, ImageBackground, Dimensions, Image, Text } from "react-native";

import {
  getPendingSelector,
  getUsersSelector,
  getErrorSelector,
} from "./store/user/selectors";
import { fetchUserRequest } from "./store/user/actions";
import styled from 'styled-components'

const NormalText = styled(Text)`
  text-align: center
`;

const WhiteText = styled(Text)`
  color: white;
  font-size: 16px;
  text-align: center
`;

const GrayText = styled(Text)`
  font-size: 12px;
  color: gray;
  text-align: right;
  margin: 10px
`;

const BoldText = styled(Text)`
  margin: 10px;
  font-weight: bold;
  text-align: center
  font-size: 20px
`
const ContainerView = styled(View)`
  flex: 1
`
const ContainerScrollView = styled(ScrollView)`
  flex: 1
`
const RedPressable = styled(Pressable)`
  background-color: red;
  padding: 20px
`
const SmallContainerView = styled(View)`
  margin: 10px;
  border-radius: 10px;
  elevation: 5;
  background-color: white
`
const CicrledImage = styled(Image)`
  width: 100px;
  height: 100px; 
  border-radius: 50px;
  align-self: center;
`

const Layout = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const users = useSelector(getUsersSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
  }, []);

  return (
    <ContainerView>
      <RedPressable onPress= {() =>dispatch(fetchUserRequest())}>
        <WhiteText>Fetch</WhiteText>
      </RedPressable>
      <ContainerScrollView>
        {pending ? (
          <NormalText>Loading...</NormalText>
        ) : error ? (
          <NormalText>Error</NormalText>
        ) : (
          users.map((user) => (
            <SmallContainerView key={user.id}>
              <GrayText>{user.createdAt}</GrayText>
              <CicrledImage source={{ uri: user.avatar }}/>
                <BoldText style={{fontWeight:'bold'}}>{user.name}</BoldText>
            </SmallContainerView>
          ))
        )}
      </ContainerScrollView>
    </ContainerView>
  );
};

export default Layout;
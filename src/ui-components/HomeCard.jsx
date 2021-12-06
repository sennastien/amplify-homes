/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="10px 10px 10px 10px"
      position="relative"
      gap="10px"
      direction="column"
      height="1463px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        padding="0px 0px 0px 0px"
        borderRadius="198px"
        shrink="0"
        src={home?.image_url}
        width="1044px"
        position="relative"
        height="660px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="left"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Inter"
        width="1044px"
        fontSize="64px"
        lineHeight="24px"
        position="relative"
        fontWeight="700"
        direction="column"
        height="348px"
        children={home?.address}
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="left"
        shrink="0"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Inter"
        width="1034px"
        fontSize="64px"
        lineHeight="24px"
        position="relative"
        fontWeight="400"
        direction="column"
        children={`${"Price: $"}${home?.price}${"/night"}`}
        {...getOverrideProps(overrides, "Flex.Text[1]")}
      ></Text>
    </Flex>
  );
}

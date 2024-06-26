import { router, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle = {{ height: "100%" }}>
        <View className="w-full justify-center items-center px-4 min-h-[85vh]">
          <Image source={ images.logo } resizeMode='contain' className="w-[130px] h-[84px]"/>
          <Image source={images.cards} resizeMode='contain' className="max-w-[380px] w-full h-[300px]" />
          <View className="mt-5 relative">
            <Text className="text-3xl text-white text-center font-bold">Discover endless possibilities with 
              <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image source={images.path} resizeMode='contain' className="w-[136px] h-[15px] absolute -bottom-2 -right-8"/>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, repellat?</Text>
          <CustomButton
          title="Continue with Email"
          handlePress={()=> router.push("/sign-in")}
          containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

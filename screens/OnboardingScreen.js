import { Text, TouchableOpacity, Image,StyleSheet, Dimensions } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const {width,height} = Dimensions.get('window');

export default function OnboardingScreen() {
  return (
    <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <LottieView source={require('../assets/GymMain.json')} autoPlay loop style={styles.lottie} />,
      title: 'Welcome to FitLife Gym',
      subtitle: 'Your journey to a healthier and stronger you starts here!',
    },
    {
        backgroundColor: '#000',
        image: <LottieView source={require('../assets/gymWorkout.json')} autoPlay loop style={styles.lottie} />,
        title: 'Personalized Workout Plans',
        subtitle: 'Get customized workout plans tailored to your fitness goals.',
    },
    {
        backgroundColor: '#fff',
        image: <LottieView source={require('../assets/gymProgress.json')} autoPlay loop style={styles.lottie} />,
        title: 'Track Your Progress',
        subtitle: 'Monitor your progress and achieve your fitness milestones.',
    },
  ]}
/>


  )
}


const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: 300,
  },
})

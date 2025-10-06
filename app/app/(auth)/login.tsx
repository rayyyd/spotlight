import { Image, View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'

export default function login() {
  return (
    <View style={styles.container}>
      {/* brand section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>spotlight</Text>
        <Text style={styles.tagline}>don't miss anything</Text>
        <View style={styles.illustrationContainer}>
            <Image source={require('../../assets/images/auth-bg-1.png')} style={styles.illustration}/>
        </View>
      </View>
    </View>
  )
}
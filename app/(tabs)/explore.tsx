import { StyleSheet, Image, Platform, SafeAreaView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
        <ThemedView>
            <ThemedText>Hello Tab Two</ThemedText>
        </ThemedView>
    </SafeAreaView>
  );
}

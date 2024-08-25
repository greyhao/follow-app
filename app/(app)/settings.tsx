import { useAtom, useSetAtom } from 'jotai'
import { ScrollView, Switch, useColorScheme } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

import { Button, Column, Container, Iconify, Row, Text, TextButton } from '~/components'
import { Image } from '~/components/image'
import { useCurrentUser } from '~/hooks/use-current-user'
import { useLogOut } from '~/hooks/use-log-out'
import { accentColorAtom, userThemeAtom } from '~/store/theme'
import { accentColors } from '~/theme'

function ThemeSwitcher() {
  const setSelectedAccentColor = useSetAtom(accentColorAtom)

  return (
    <Row align="center" gap={30}>
      <Text>Accent color</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      >
        {accentColors.map(accentColor => (
          <Button
            key={accentColor}
            color={accentColor}
            size="small"
            onPress={() => {
              setSelectedAccentColor(accentColor)
            }}
          >
            <Text color={accentColor}>{accentColor}</Text>
          </Button>
        ))}
      </ScrollView>
    </Row>
  )
}

function Appearance() {
  const { styles, theme } = useStyles(styleSheet)
  const [userTheme, setUserTheme] = useAtom(userThemeAtom)
  const colorScheme = useColorScheme()
  return (
    <Column gap={10}>
      <Row align="center" gap={8} px={12}>
        <Iconify icon="mgc:palette-cute-re" size={20} />
        <Text weight="bold">Appearance</Text>
      </Row>
      <Column style={styles.section}>
        <ThemeSwitcher />
        <Row h={1} bg="component" w="100%" />
        <Row justify="space-between" align="center">
          <Text>Follow system</Text>
          <Switch
            value={userTheme === 'system'}
            onValueChange={
              value => setUserTheme(value ? 'system' : colorScheme === 'dark' ? 'dark' : 'light')
            }
            trackColor={{ true: theme.colors.accent9 }}
            style={{
              transform: [{ scale: 0.8 }],
            }}
          />
        </Row>
        {userTheme !== 'system' && (
          <>
            <Row h={1} bg="component" w="100%" />
            <Row justify="space-between" align="center">
              <Text>Dark mode</Text>
              <Switch
                value={userTheme === 'dark'}
                onValueChange={
                  value => setUserTheme(value ? 'dark' : 'light')
                }
                trackColor={{ true: theme.colors.accent9 }}
                style={{
                  transform: [{ scale: 0.8 }],
                }}
              />
            </Row>
          </>
        )}
      </Column>
    </Column>
  )
}

function UserInfo() {
  const { styles } = useStyles(styleSheet)

  const { user } = useCurrentUser()
  const logout = useLogOut()

  return (
    <Column gap={10}>
      <Row align="center" gap={8} px={12}>
        <Iconify icon="mgc:user-setting-cute-re" size={20} />
        <Text weight="bold">Profile</Text>
      </Row>
      <Column style={styles.section}>
        {user && (
          <>
            <Row
              gap={24}
              align="center"
              my={10}
            >
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                }}
                source={user.image}
              />
              <Column gap={8}>
                <Text weight="700">
                  {user.name}
                </Text>
                <Text>
                  {user.email}
                </Text>
              </Column>
            </Row>
            <TextButton
              color="red"
              onPress={logout}
              title="Sign out"
              style={{ width: '100%', marginBottom: 10 }}
            />
          </>
        )}
      </Column>
    </Column>
  )
}

export default function SettingsPage() {
  return (
    <Container p={14} gap={20}>
      <Appearance />
      <UserInfo />
    </Container>
  )
}

const styleSheet = createStyleSheet(theme => ({
  section: {
    backgroundColor: theme.colors.gray2,
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: theme.colors.gray3,
    borderWidth: 1,
  },
}))

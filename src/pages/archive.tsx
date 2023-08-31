import * as React from 'react'
import Head from 'next/head'
import { Text, Container, Heading, Link } from 'theme-ui'
import { VStack } from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import metadata from '../constants/metadata.json'

const Dates: React.FC = (props) => (
	<Text as="small" sx={{ fontSize: 1 }} {...props} />
)

const Description: React.FC = (props) => (
	<Text as="p" sx={{ maxWidth: 'measure' }} {...props} />
)

const Tooling: React.FC = (props) => (
	<Text as="p" sx={{ fontSize: 1 }} {...props} />
)

const Archive: React.FC = () => (
	<React.Fragment>
		<Head>
			<title key="title">Archive {metadata.titleSuffix}</title>
		</Head>

		<Header>
			<HeaderName>Inspiration</HeaderName>

			<HeaderTitle>We're constatly inspired and so, here are the lists!</HeaderTitle>
		</Header>

		<Container mt={5}>
			<VStack gap={5}>
				<VStack gap={3}>
					<Heading>
						Kent C. Dodd's Digital Experiance <Dates>(2022 &ndash; 2023)</Dates>
					</Heading>

					<Description>
						There is no way you can hate this, it's so cool! (Please do compare us, we're more into minimalism - WHICH ISN'T BAD, right?!).
					</Description>

					<Tooling>
						Built with <Link href="https://remix.run">Remix</Link>.
					</Tooling>
				</VStack>
			</VStack>
		</Container>
	</React.Fragment>
)

export default Archive

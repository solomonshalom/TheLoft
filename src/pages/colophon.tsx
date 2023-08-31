import * as React from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Grid, Text, Container, Heading, Link } from 'theme-ui'
import { VStack } from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import metadata from '../constants/metadata.json'

const DependencyList = (props) => (
	<VStack
		as="ul"
		gap={2}
		sx={{
			marginTop: 3,
			padding: 0,
			listStyleType: 'none',
		}}
		{...props}
	/>
)

interface DependencyProps {
	version?: string
	href?: string
}

const Dependency: React.FC<DependencyProps> = ({ version, href, children }) => (
	<Text as="li" sx={{ display: 'inline-flex', alignItems: 'baseline' }}>
		<Link variant="ui" href={href} sx={{ fontSize: [2, 4] }}>
			{children}
		</Link>

		{version && (
			<Text as="span" sx={{ fontFamily: 'mono', fontSize: 0 }}>
				&#8201;v{version}
			</Text>
		)}
	</Text>
)

interface ColophonProps {
	versions: {
		[dependency: string]: string
	}
}

const ColophonPage: React.FC<ColophonProps> = ({ versions }) => {
	const { react, next, mdx, themeUI, prismjs, typescript } =
		versions

	return (
		<React.Fragment>
			<Head>
				<title key="title">Colophon {metadata.titleSuffix}</title>
			</Head>

			<Header>
				<HeaderName>Colophon</HeaderName>

				<HeaderTitle>Building Blocks</HeaderTitle>
			</Header>

			<Container mt={5}>
				<Grid columns={[1, 3]} gap={4}>
					<Box>
						<Heading color="muted-text">Functionality</Heading>

						<DependencyList>
							<Dependency
								version={typescript}
								href="https://typescriptlang.org/"
							>
								TypeScript
							</Dependency>

							<Dependency version="1.2.1" href="https://reactjs.org">
								React
							</Dependency>

							<Dependency version="1.2.1" href="https://nextjs.org">
								Next.js
							</Dependency>

							<Dependency version="1.1.1" href="https://mdxjs.com">
								MDX
							</Dependency>
						</DependencyList>
					</Box>

					<Box>
						<Heading color="muted-text" mt={[4, 0]}>
							Design
						</Heading>

						<DependencyList>
							<Dependency version="0.1.1" href="https://theme-ui.com">
								Theme UI
							</Dependency>

							<Dependency version="2.21" href="https://prismjs.com/">
								Prism
							</Dependency>

							<Dependency version="3.21" href="https://rsms.me/inter">
								Inter
							</Dependency>

							<Dependency version="1.000" href="https://dank.sh">
								Dank Mono
							</Dependency>
						</DependencyList>
					</Box>

					<Box>
						<Heading color="muted-text" mt={[4, 0]}>
							Infrastructure
						</Heading>

						<DependencyList>
							<Dependency href="https://github.com">GitHub</Dependency>

							<Dependency href="https://vercel.com">Vercel</Dependency>


						</DependencyList>
					</Box>
				</Grid>
			</Container>
		</React.Fragment>
	)
}

// `getStaticProps` must be async, but I don't need to wait on jack
export const getStaticProps: GetStaticProps = async () => {

	const versions = {
		react,
		next,
		mdx,
		themeUI,
		prismjs,
		typescript,
	}

	return {
		props: {
			versions,
		},
	}
}

export default ColophonPage

import * as React from 'react'
import Head from 'next/head'
import { Grid, Text, Container, Heading, Link, SxProp } from 'theme-ui'
import { VisuallyHidden } from '@reach/visually-hidden'
import { VStack } from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import metadata from '../constants/metadata.json'

interface DependencyProps {
	href?: string
}

const Dependency: React.FC<DependencyProps> = ({ href, ...props }) => {
	const WrapperComponent: React.FC<SxProp> = (nestedProps) =>
		href ? (
			<Link variant="ui" href={href} {...nestedProps} />
		) : (
			<Text as="span" {...nestedProps} />
		)

	return <WrapperComponent sx={{ fontSize: [2, 4] }} {...props} />
}

const Details: React.FC = ({ children, ...props }) => (
	<Text sx={{ display: 'block', fontSize: 0 }} {...props}>
		<VisuallyHidden> (</VisuallyHidden>
		{children}
		<VisuallyHidden>)</VisuallyHidden>
	</Text>
)

const DependencyList = (props) => (
	<VStack
		as="ul"
		gap={2}
		sx={{ padding: 0, listStyleType: 'none' }}
		{...props}
	/>
)

const UsesPage: React.FC = () => (
	<React.Fragment>
		<Head>
			<title key="title">Uses {metadata.titleSuffix}</title>
		</Head>

		<Header>
			<HeaderName>Uses</HeaderName>

			<HeaderTitle>Tools of Our Trade</HeaderTitle>
		</Header>

		<Container mt={5}>
			<Grid columns={[1, '8rem 1fr']} gap={[4, 5]}>
				<Heading color="muted-text">Coding Ninja Stuff</Heading>

				<DependencyList>
					<li>
						<Dependency>NextJS</Dependency>

						<Details>Reac-based framework for developing super cool experiences</Details>
					</li>

					<li>
						<Dependency>Firebase (Maybe supabase, depends)</Dependency>

						<Details>Backend // Database</Details>
					</li>

					<li>
						<Dependency>
							Tailwind
						</Dependency>

						<Details>An aesthetic CSS framework that gives beauty to your projects</Details>
					</li>

				</DependencyList>

				<Heading color="muted-text" mt={[4, 0]}>
					Software
				</Heading>

				<DependencyList>
					<li>
						<Dependency href="https://code.visualstudio.com">
							VS Code
						</Dependency>
					</li>
				</DependencyList>

				<Heading color="muted-text" mt={[4, 0]}>
					Services
				</Heading>

				<DependencyList>
					<li>
						<Dependency href="https://github.com">GitHub</Dependency>
					</li>

					<li>
						<Dependency href="https://netlify.com">Netlify (Rare)</Dependency>
					</li>

					<li>
						<Dependency href="https://vercel.com">Vercel</Dependency>
					</li>

					<li>
						<Dependency href="https://skiff.com">Skiff</Dependency>
					</li>
				</DependencyList>
			</Grid>
		</Container>
	</React.Fragment>
)

export default UsesPage

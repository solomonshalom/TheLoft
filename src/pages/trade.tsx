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

const TradePage: React.FC = () => (
	<React.Fragment>
		<Head>
			<title key="title">Trade {metadata.titleSuffix}</title>
		</Head>

		<Header>
			<HeaderName>Trade</HeaderName>

			<HeaderTitle>Our Trade</HeaderTitle>
		</Header>

		<Container mt={5}>
			<Grid columns={[1, '8rem 1fr']} gap={[4, 5]}>
				<Heading color="muted-text">Coding Ninja Stuff</Heading>

				<DependencyList>
					<li>
						<Dependency>Websites // PWA</Dependency>

						<Details>A website is a digital identity and so we make sure it's not good, but great! (PWA Included!)</Details>
					</li>

				</DependencyList>

				<Heading color="muted-text" mt={[4, 0]}>
					Marketing Samurai
				</Heading>

				<DependencyList>
					<li>
						<Dependency href="https://code.visualstudio.com">
							Digital Marketing & Branding
						</Dependency>
						<Details>Shy but want to be out there? We will do it</Details>
					</li>
				</DependencyList>
			</Grid>
		</Container>
	</React.Fragment>
)

export default TradePage

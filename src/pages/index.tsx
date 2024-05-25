import * as React from 'react'
import type { GetStaticProps } from 'next'
import { Text, Heading, Link, Container } from 'theme-ui'
import getStats, { Stats, Book } from '../lib/getStats'
import pluralize from '../lib/pluralize'

interface ValueCountProps {
	value: number
	singular: string
	plural: string
}

const ValueCount: React.FC<ValueCountProps> = ({ value, singular, plural }) => (
	<React.Fragment>
		{value.toLocaleString()} {pluralize(value, singular, plural)}
	</React.Fragment>
)

interface FormattedBookProps {
	book: Book
}

const FormattedBook: React.FC<FormattedBookProps> = ({ book }) => (
	<React.Fragment>
		&ldquo;{book.name}&rdquo; by {book.author}
	</React.Fragment>
)

interface BooksToSentenceProps {
	books: Array<Book>
}

const BooksToSentence: React.FC<BooksToSentenceProps> = ({ books }) => {
	if (books.length === 1) return <FormattedBook book={books[0]} />

	if (books.length === 2)
		return (
			<React.Fragment>
				<FormattedBook book={books[0]} /> and <FormattedBook book={books[1]} />
			</React.Fragment>
		)

	return (
		<React.Fragment>
			{books.map((book, index) => {
				if (index === 0) return <FormattedBook book={book} />

				if (index + 1 === books.length) {
					return (
						<React.Fragment>
							, and <FormattedBook book={book} />
						</React.Fragment>
					)
				}

				return (
					<React.Fragment key={book.name}>
						, <FormattedBook book={book} />
					</React.Fragment>
				)
			})}
		</React.Fragment>
	)
}

interface IndexProps {
	stats: Stats
}

const IndexPage: React.FC<IndexProps> = ({ stats }) => {
	const {
		commits = 0,
		steps = 0,
		places = "0",
		songs = 0,
		album = null,
		books = [],
	} = stats

	return (
		<Container>
			<Text as="p" variant="section-heading" mb={3}>
				Introduction
			</Text>

			{/*No idea how, but God, no joke, literally saved the code and deployed! Every Glory is to my Lord and Saviour, Jesus Christ!*/}
			{/*Added a bunch of <br> tags to seperate the main text from the contact, also to shift the main focus. Idea given by dad <3*/}
			{/* The `Text` wrapper makes sure spaces are consistently sized */}

			<Text as="div" variant="site-intro" sx={{ display: 'contents' }}>
				<Heading as="h1" variant="site-intro" sx={{ fontWeight: 'bold' }}>
					We&rsquo;re Skynet, and we make digital experiences <Link href="/trade" sx={{ textDecoration: 'none' }}>🌴</Link> 
				</Heading>
				<br></br>
				<br></br>
				{' '}
				<Heading as="h2" variant="site-intro">
					Check out our cool (really cool) experience:{' '}
					<Link href="https://theabyss.ink">Bublr</Link>, an ultra-minimal social platform.
				</Heading>{' '}
				<br></br>
				<br></br>
				<b>// Don't be shy 🤭</b>
				<br></br>
				<br></br>
				<Text as="p" variant="site-intro">
					If your interested in knowing more about us or have a cool idea to dicuss,{' '}
					contact us [at] <Link href="mailto:solomon@theabyss.ink">solomon@theabyss.ink</Link>
				</Text>
			</Text>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const stats = await getStats()

	return {
		props: {
			stats,
		},
		revalidate: 60 * 60, // revalidate at most once per hour
	}
}

export default IndexPage

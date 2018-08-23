import React, { Component } from 'react'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getBlogPosts = this.getBlogPosts.bind(this)
    this.getBlogPost = this.getBlogPost.bind(this)
  }

  componentDidMount () {
    this.getBlogPosts()
  }

  fetch (endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getBlogPosts () {
    this.fetch('/api/blog_posts')
      .then(blogPosts => {
        if (blogPosts.length) {
          this.setState({blogPosts: blogPosts})
          this.getBlogPost(blogPosts[0].id)
        } else {
          this.setState({blogPosts: []})
        }
      })
  }

  getBlogPost (id) {
    this.fetch(`/api/blog_posts/${id}`)
      .then(blogPost => this.setState({blogPost: blogPost}))
  }

  render () {
    let {blogPosts, blogPost} = this.state
    return blogPosts
      ? <Container text>
        <Header as='h2' icon textAlign='center' color='teal'>
          <Icon name='unordered list' circular />
          <Header.Content>
            List of Blog Posts
          </Header.Content>
        </Header>
        <Divider hidden section />
        {blogPosts && blogPosts.length
          ? <Button.Group color='teal' fluid widths={blogPosts.length}>
            {Object.keys(blogPosts).map((key) => {
              return <Button active={blogPost && blogPost.id === blogPosts[key].id} fluid key={key} onClick={() => this.getBlogPost(blogPosts[key].id)}>
                {blogPosts[key].title}
              </Button>
            })}
          </Button.Group>
          : <Container textAlign='center'>No posts found.</Container>
        }
        <Divider section />
        {blogPost &&
          <Container>
            <Header as='h2'>{blogPost.title}</Header>
            {blogPost.description && <p>{blogPost.description}</p>}
            {blogPost.ingredients &&
              <Segment.Group>
                {blogPost.ingredients.map((ingredient, i) => <Segment key={i}>{ingredient.description}</Segment>)}
              </Segment.Group>
            }
            {blogPost.steps && <p>{blogPost.steps}</p>}
            {blogPost.source && <Button basic size='tiny' color='teal' href={blogPost.source}>Source</Button>}
          </Container>
        }
      </Container>
      : <Container text>
        <Dimmer active inverted>
          <Loader content='Loading' />
        </Dimmer>
      </Container>
  }
}

export default App

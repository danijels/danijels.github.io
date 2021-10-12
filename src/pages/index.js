import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./index.scss"
import fillers from "../fillers"

import Navbar from "../components/navbar"
import Card from "../components/card"
import Portfolio from "../components/portfolio"
import Board from "../components/board"
import Pin from "../components/pin"
import Footer from "../components/footer"

import avatar from "../images/avatar.jpg"

const { useState } = React;
const host = typeof window !== 'undefined' && `${window.location.protocol}//${window.location.host}`;

const IndexPage = ({ data: { about, categories } }) => {
    const allCategories = categories.nodes;
    const initialCategory = allCategories.find(cat => cat.title === 'all');
    const [category, setCategory] = useState(initialCategory);
  
    const handleClick = (evt) => {
        const currentCategory = allCategories.find(cat => cat.title === evt.target.id);
        setCategory(currentCategory);
    }
  
    const buttons = allCategories.map(node => [node.buttonTitle, node.title, handleClick]);
    const board = {
        title: category.buttonTitle,
        description: category.description,
    }

    const pins = category.projects.map(({ title, shortDescription, pinPhoto, stack, queryParam, url }) => {
        const links = [
            ["See More", `${host}/project?name=${queryParam}`],
            ["See Live", url],
            ["See Code", `https://github.com/danijels/${queryParam}`]
        ];
        return <Pin 
                  key={title}
                  links={links}
                  photo={pinPhoto.url}
                  title={title}
                  description={shortDescription}
                  logos={<MDXRenderer>{stack.markdownNode.childMdx.body}</MDXRenderer>}
                />
    });

    return (
        <>
    	    <Navbar
              nav={fillers.navLinks}
            />
            <Card
              text="WEB DEVELOPER"
              title="Danijela Sain"
              img={avatar}
              alt="a portrait of me sitting on a ruined wall with a river in hills in the background"
              back={<MDXRenderer>{about.content.markdownNode.childMdx.body}</MDXRenderer>}
            />
    	    <Portfolio 
              title='Portfolio' 
              categories={buttons} 
            >
      	    	<Board text={board} >
                    {pins}
      	    	</Board>
	        </Portfolio>
            <Footer 
              fields={fillers.contact}
              title='Contact' 
            />
        </>
    )
}

export const pageQuery = graphql`
query IndexPageQuery {
  about: graphCmsAboutMe {
    content {
      markdownNode {
        childMdx {
          body
        }
      }
    }
  }
  categories: allGraphCmsCategory {
    nodes {
      title
      description
      buttonTitle
      projects {
        title
        shortDescription
        pinPhoto {
          url
        }
        stack {
          markdownNode {
            childMdx {
              body
            }
          }
        }
        queryParam
        url
      }
    }
  }
}`

export default IndexPage

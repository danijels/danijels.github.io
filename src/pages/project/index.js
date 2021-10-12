import * as React from "react"
import { useQueryParam, StringParam } from "use-query-params";
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../index.scss"
import fillers from "/src/fillers"
import Navbar from "/src/components/navbar"
import Article from "/src/components/article"
import Footer from "/src/components/footer"

const ProjectPage = ({ data: { projects } }) => {
	const [name] = useQueryParam('name', StringParam);
	const allProjects = projects.nodes;

	const currentProject = allProjects.find(node => node.queryParam === name);

	if (currentProject) {
		const mainText = currentProject.longDescription.markdownNode.childMdx.body;
		const stack = currentProject.stack.markdownNode.childMdx.body;
		let aside = null;
		if (currentProject.aside) aside = currentProject.aside.markdownNode.childMdx.body;
		const photos = currentProject.photos.map(obj => [obj.url, 'a screenshot of the app']);

		return (
			<>
				<Navbar 
					nav={fillers.navLinks}
				/>
				<Article
					left={
						<>
							<h1>{currentProject.title}</h1>
							<MDXRenderer>{mainText}</MDXRenderer>
							
						</>
					}
					right={
						aside 
						? <>
							<MDXRenderer>{stack}</MDXRenderer>
							<MDXRenderer>{aside}</MDXRenderer>
						</>
						: <MDXRenderer>{stack}</MDXRenderer>
					}
					photos={photos}
				/>
				<Footer
					title='Contact'
					fields={fillers.contact}
				/>
			</>
		)
	} else return null;
}

export const pageQuery = graphql`
query ProjectPageQuery {
  projects: allGraphCmsProject {
	nodes {
      title
      queryParam
      aside {
        markdownNode {
          childMdx {
            body
          }
        }
      }
      longDescription {
        markdownNode {
          childMdx {
            body
          }
        }
      }
      stack {
      	markdownNode {
      	  childMdx {
      		body
      	  }
      	}
      }
      photos {
        url
      }
    }
  }
}`

export default ProjectPage
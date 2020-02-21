import React from 'react';
import { StaticQuery,graphql } from "gatsby"

function getSidebarLabels(data){
	const sidebarItemsArray = [];
	data.allSidebarItemsJson.edges.forEach((item)=>{
		const {title='',link=''}=item.node;
		const renderItem = <li><a href={link} key={link} target="_blank">{title}</a></li>
		sidebarItemsArray.push(renderItem);
	});	
	return sidebarItemsArray;
}	

const SideBar = ({children})=>{
	return <StaticQuery 
		query={graphql`
			query SideBarItemsQuery{
				allSidebarItemsJson{
					edges{
						node{
							title
							desc
							link
						}
					}
				}
			}
		`}
		render={(data)=>{
			return(<>
				<ul>{getSidebarLabels(data)}</ul>
			</>)
		}}
		/>
}

export default SideBar;
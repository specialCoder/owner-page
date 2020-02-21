import React from 'react';
import { StaticQuery,graphql } from "gatsby";
import './style.css';

function getSidebarLabels(data){
	const sidebarItemsArray = [];
	data.allSidebarItemsJson.edges.forEach((item)=>{
		const {title='',link=''}=item.node;
		const renderItem = <li><a href={link} key={link} target="_blank" rel="noopener noreferrer">{title}</a></li>
		sidebarItemsArray.push(renderItem);
	});	
	return sidebarItemsArray;
}	

const ListContent = (props)=>{
	const {data} = props;
	console.log('props data-->',props.data);

	const handleClick = (url)=>{
		window.open(url);
	}

	const renderItem = (item={},i)=>{
		const {title,desc,link} = item;
		return <div 
		    key={i}
			  className="list-item"
			  onClick={handleClick}
		  >
			<p className="list-item-title">{title}</p>
			<p className="list-item-desc">{desc}</p>
		</div>
	}

	return <div className="list-content">
			{data.map((item,i)=>{
				return renderItem(item.node,i);
			})}
	</div>
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
			return <ListContent data={data.allSidebarItemsJson.edges}/>
		}}
		/>
}

export default SideBar;
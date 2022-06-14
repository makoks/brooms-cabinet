import React from 'react';
import {List, Switch} from "antd";
import {Draggable} from "react-beautiful-dnd";


export const Task = ({item, index, switchCompleted}) => {
	const getItemStyle = (isDrag, completed) => {
		return {
			backgroundColor: isDrag
				? '#e6f7ff'
				: completed ? 'lightgrey' : 'white',
			textDecoration: completed ? 'line-through' : ''
		}
	}

	return (
		<Draggable key={item.id} draggableId={item.id} index={index}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<List.Item
						style={getItemStyle(snapshot.isDragging, item.completed)}
						actions={[<Switch checked={item.completed} onChange={() => switchCompleted(item.id)}/>]}
					>
						{index + 1}. {item.content}
					</List.Item>
				</div>
			)}
		</Draggable>
	)
}

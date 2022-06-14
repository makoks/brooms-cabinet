import React, {useEffect, useState} from 'react';
import {List} from "antd";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {Task} from "./Task/Task";


export const Tasks = ({data}) => {
	const [items, setItems] = useState(data)

	useEffect(() => {
		setItems(data)
	}, data)

	const reorder = (list, startIndex, endIndex) => {
		const result = [...list]
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)

		return result
	}

	const onDragEnd = ({source, destination}) => {
		if (!destination) return

		const newItems = reorder(items, source.index, destination.index)
		setItems(newItems)
	}

	const switchCompleted = (id) => {
		setItems(items.map(item => item.id === id ? {...item, completed: !item.completed} : item))
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='tasks'>
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						<List
							grid={{gutter: 10, column: 1}}
							size="large"
							bordered
							dataSource={items}
							renderItem={(item, index) => <Task item={item} index={index} switchCompleted={switchCompleted}/>}
						>
							{provided.placeholder}
						</List>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}

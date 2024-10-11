import { FC } from 'react';
import './tag.css';
import { TagUIProps } from './type';

export const TagUI: FC<TagUIProps> = ({ tagClass, tag }) => {
	return (
		<div className={`tag ${tagClass}`}>
			<svg
				width='6'
				height='6'
				viewBox='0 0 6 6'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect width='6' height='6' rx='2' className={`${tagClass}`} />
			</svg>
			<span>{tag}</span>
		</div>
	);
};

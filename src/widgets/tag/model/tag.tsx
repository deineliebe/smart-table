import { FC } from 'react';
import { TagProps } from './type';
import { TagUI } from '../ui';

export const Tag: FC<TagProps> = ({ tag }) => {
	let tagClass = '';
	switch (tag) {
		case 'On track':
			tagClass = 'tag-success';
			break;
		case 'Potential risk':
			tagClass = 'tag-warning';
			break;
		case 'At risk':
			tagClass = 'tag-error';
			break;
		case 'On hold':
			tagClass = 'tag-inactive';
	}
	return <TagUI tagClass={tagClass} tag={tag} />;
};

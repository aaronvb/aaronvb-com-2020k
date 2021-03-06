// @flow strict
import React from 'react';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const {
    tags, title, date, legacyArticleId
  } = post.frontmatter;

  let disqusId = slug;
  if (legacyArticleId !== null && legacyArticleId !== undefined) {
    disqusId = legacyArticleId;
  }

  return (
    <div className={styles['post']}>
      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={disqusId} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;

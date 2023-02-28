import React from "react";
import styles from "./SocialMediaBadge.module.scss";
import { MediaBadgeConfig } from "../../config/MediaBadgeConfig";

const SocialMediaBadge = () => {
	return (
		<div className={styles.badge}>
			{MediaBadgeConfig.map(({ image, href, id }) => {
				return (
					<a href={href} key={id}>
						<img src={image} alt={id} className={styles.bIcon} />
					</a>
				);
			})}
		</div>
	);
};

export default SocialMediaBadge;

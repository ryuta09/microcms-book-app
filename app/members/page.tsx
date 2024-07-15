import Image from 'next/image'
import styles from './page.module.css'
import { getMermbersList } from '@/lib/microcms'
import { MEMBERS_LIST_ITEM } from '../_constans'
export default async function Members() {
  const data = await getMermbersList({limit: MEMBERS_LIST_ITEM})
  return(
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map(member => (
            <li key={member.id} className={styles.list}>
              <Image 
                src={member.image.url}
                width={member.image.width}
                height={member.image.height}
                alt=''
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
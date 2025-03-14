import { useNavigate } from "react-router-dom"
import type { Snippet } from "../../../@types/collection"

export const SnippetCard = ({title, description, last_update, last_modifier, engine, pid}: Partial<Snippet>) => {
    const navigateTo = useNavigate()
    return(
        <div onClick={() => navigateTo(`/snippet/${pid}`)} className="bg-dark-secondary rounded-lg p-6 cursor-pointer flex flex-col justify-between">
          <div className='mb-4'>
            <h3 className="text-light-gray font-semibold text-xl mb-1">{title}</h3>
            <p className='text-xs text-neutral-gray'>{description}</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img className='aspect-square max-w-6 rounded-full' src={`${last_modifier?.github}.png`} alt={last_modifier?.name} />
              <hgroup>
                <h3 className="text-light-gray text-xs">{last_modifier?.name}</h3>
                <h3 className="text-neutral-gray text-[10px]">{last_update}</h3>
              </hgroup>
            </div>
            {engine && <p className='text-neutral-gray text-xs'>{engine}</p>}
          </div>
      </div>
    )
}
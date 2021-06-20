import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getOpportunities } from '../../api/opportunity';
import OpportunityList from '../../components/opportunity/OpportunityList.js'
import { opportunityNumber } from '../../setting/constants/config';

const Opportunities = () => {
	const [opportunityList, setOpportunityList] = useState([])
	const [pageNumber, setPageNumber] = useState(1);
	const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
	const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		getOpportunityList();
	}, [])

	const getOpportunityList = () => {
		setLoading(true);

		getOpportunities(opportunityNumber, pageNumber)
			.then(((resp) => {
				// console.log(resp.data) 

				setOpportunityList(resp.data.opportunities)
				setTotalPages(resp.data.totalPages)
				setTotalItems(resp.data.setTotalItems)
				setLoading(false);
			}))
			.then(() => {
				resizeAllMasonryItems()
			})
	}

	const resizeMasonryItem = (item) => {
		const grid = document.getElementsByClassName('masonry')[0],
				rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
				rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

		const rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));

		item.style.gridRowEnd = 'span '+ rowSpan;
	}

	const resizeAllMasonryItems = () => {
		const allItems = document.getElementsByClassName('masonry-brick');

		for(let i=0;i<allItems.length;i++){
			resizeMasonryItem(allItems[i]);
		}
	}
	
  const onLoadMore = () => {
    setLoadingMore(true);

    getOpportunities(opportunityNumber, pageNumber + 1)
      .then(resp => {
        setOpportunityList(opportunityList.concat(resp.data.opportunities));

        setPageNumber(pageNumber + 1)
        setLoadingMore(false);
      })
			.then(() => {
				resizeAllMasonryItems()
			})
      .catch(err => {
        console.log(err);
      })
  }

	return (
		<div>
			<div><h1>Internship Opportunities</h1></div>
			<OpportunityList opportunityList={opportunityList} loadingMore={loadingMore} onLoadMore={onLoadMore} pageNumber={pageNumber} loading={loading} getOpportunityList={getOpportunityList} totalPages={totalPages} totalItems={totalItems} />
		</div>
	)
}

export default Opportunities

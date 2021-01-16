import styled from 'styled-components'

export const PageContainer = styled.div`
    width: 100%;
    margin-top: 120px;
    text-align: center;
`;

export const PageContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const PageLeftSidePanel = styled.div`
    flex: .4;
    background-color: red;
`

export const PageTaskFormWrapper = styled.div`
    flex: .4;
    background-color: green;
`

export const PageRightPanel = styled.div`
    flex: .4;
    background-color: yellow;
`

export const TaskItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const TaskTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 20px;
`

export const TaskItemTitleLabel = styled.h2`
    font-size: 18px;
    text-align: left;
    margin-bottom: 0px;
    padding-bottom: 0px;
`
export const TaskItemTitle = styled.h2`
    text-align: left;
`

export const TaskItemDelete = styled.div`
    cursor: pointer;
    color: red;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
`

export const TaskItemView = styled.div`
    cursor: pointer;
    color: green;
    align-items: center;
    justify-content: center;
`

export const CreateTaskButtonWrapper = styled.div`
`

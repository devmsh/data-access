
export function createEventData(dynamodb,table,eventData) {    
    return dynamodb.put({
        TableName: table,
        Item: eventData
    }).promise();
}

export function getEventData(dynamodb,table){
    return dynamodb.scan({
        TableName: table
    }).promise();
}

export function getEventDataByID(dynamodb,table,id){
    return dynamodb.get({
        TableName: table,
        Key: {
            id
        }
    }).promise();
}

export function deleteEventData(dynamodb,table,id){
    return dynamodb.delete({
        TableName: table,
        Key: {
            id
        }
    }).promise();
}
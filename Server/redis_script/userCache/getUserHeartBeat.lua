local accountId = ARGV[1]
local minTs = tonumber(ARGV[2]) -- minimum timestamp value

local accountKey = 'account:' .. accountId
local lastTs =  redis.call('HGET', accountKey, 'heartBeatTs')

if tonumber(lastTs) >= minTs then
  return 1
end

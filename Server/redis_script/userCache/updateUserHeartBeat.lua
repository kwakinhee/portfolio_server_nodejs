local accountId, curTimeUtc = unpack(ARGV)
local accountKey = 'account:' .. accountId

redis.call('HSET', accountKey, 'heartBeatTs', curTimeUtc)
